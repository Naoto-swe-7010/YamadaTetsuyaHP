'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Loading from '@/components/ui/Loading';
import { InputField, TextareaField } from './FormField';
import SuccessMessage from './SuccessMessage';
import { sendContactEmail } from '@/lib/emailjs';
import { ContactFormData, ContactFormErrors } from '@/types/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前は必須です';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容は必須です';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'お問い合わせ内容は10文字以上で入力してください';
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
      const success = await sendContactEmail(formData);
      
      if (success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        alert('メッセージの送信に失敗しました。しばらく時間をおいてから再度お試しください。');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('メッセージの送信に失敗しました。しばらく時間をおいてから再度お試しください。');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  if (isSuccess) {
    return <SuccessMessage onReset={handleReset} />;
  }

  return (
    <Card variant="glass" className="animate-slide-up">
      <CardHeader>
        <h2 className="text-2xl font-bold text-white text-center">Contact Form</h2>
        <p className="text-gray-300 text-center text-sm mt-2">
          ご質問やご相談がございましたら、お気軽にお問い合わせください
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="お名前"
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
            placeholder="山田太郎"
          />

          <InputField
            label="メールアドレス"
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            placeholder="example@email.com"
          />

          <TextareaField
            label="お問い合わせ内容"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            error={errors.message}
            placeholder="ご質問やご相談内容をご記入ください..."
          />

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