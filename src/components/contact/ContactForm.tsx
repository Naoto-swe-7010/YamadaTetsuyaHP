'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Loading from '@/components/ui/Loading';
import SuccessMessage from './SuccessMessage';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = '氏名は必須です。';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください。';
    } else if (!/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください。';
    }

    if (!formData.message.trim()) {
      newErrors.message = '問い合わせ内容は必須です。';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // EmailJsへの接続
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      console.log('環境変数チェック:', {
        serviceId: serviceId || '[未設定]',
        templateId: templateId || '[未設定]',
        publicId: publicId || '[未設定]'
      });

      if (!serviceId || !templateId || !publicId) {
        throw new Error('EmailJSの環境変数が設定されていません');
      }

      // EmailJSの初期化
      emailjs.init(publicId);
      console.log('EmailJS初期化完了');

      // メール送信用のデータを準備（EmailJSテンプレートの変数名に合わせる）
      const emailData = {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        message: formData.message,
        to_name: '山田哲也'
      };

      console.log('送信データ:', emailData);

      const result = await emailjs.send(serviceId, templateId, emailData, publicId);
      
      console.log('送信結果:', result);
      
      if (result.status === 200) {
        alert('送信しました。');
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch (error) {
      console.error('詳細エラー:', error);
      alert('エラーが出ました: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSuccess) {
    return <SuccessMessage onReset={handleReset} />;
  }

  return (
    <Card variant="glass" className="animate-slide-up">
      <CardHeader>
        <h2 className="text-2xl font-bold text-white text-center">お問い合わせ</h2>
        <p className="text-gray-300 text-center text-sm mt-2">
          ご質問やご相談がございましたら、お気軽にお問い合わせください
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 名前 */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-lg font-bold text-white block">
              名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="rounded-md border-white/20 bg-white/10 text-white placeholder-gray-400 shadow-sm focus:border-accent-400 focus:ring focus:ring-accent-400/20 focus:ring-opacity-50 block p-3 mt-1 w-full"
              placeholder="山田太郎"
            />
            {errors.name && (
              <p className="text-red-400 text-sm font-medium">{errors.name}</p>
            )}
          </div>

          {/* メールアドレス */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-lg font-bold text-white block">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="rounded-md border-white/20 bg-white/10 text-white placeholder-gray-400 shadow-sm focus:border-accent-400 focus:ring focus:ring-accent-400/20 focus:ring-opacity-50 block p-3 mt-1 w-full"
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm font-medium">{errors.email}</p>
            )}
          </div>

          {/* 問い合わせ内容 */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-lg font-bold text-white block">
              問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="rounded-md border-white/20 bg-white/10 text-white placeholder-gray-400 shadow-sm focus:border-accent-400 focus:ring focus:ring-accent-400/20 focus:ring-opacity-50 block p-3 mt-1 w-full resize-none"
              placeholder="ご質問やご相談内容をご記入ください..."
            />
            {errors.message && (
              <p className="text-red-400 text-sm font-medium">{errors.message}</p>
            )}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              <span className="text-accent-400">📧</span> 
              回答は記載いただいたメールアドレスに返信させていただきます。
            </p>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Loading size="sm" className="mr-2" />
                送信中...
              </div>
            ) : (
              'メッセージを送信'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}