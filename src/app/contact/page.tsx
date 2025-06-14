import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/common/PageHeader';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '山田哲也選手へのお問い合わせはこちらから。ご質問やご相談がございましたら、お気軽にお声をかけください。',
  openGraph: {
    title: 'お問い合わせ | 山田哲也 | ラクロス選手公式サイト',
    description: '山田哲也選手へのお問い合わせはこちらから。ご質問やご相談がございましたら、お気軽にお声をかけください。',
    images: ['/img3.jpeg'],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="お問い合わせ"
        backgroundImage="/img3.jpeg"
      />

      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img3.jpeg"
            alt="お問い合わせ背景"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-dark" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-6">
                お気軽にお声をかけください
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                挑戦への想いや経験についてのご質問、
                講演・メディア出演のご依頼、
                その他どのようなことでも
                お気軽にお問い合わせください。
              </p>
            </div>

            {/* Contact Form */}
            <ContactForm />

            {/* Additional Contact Info */}
            <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="text-accent-400 text-2xl mb-3">📧</div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-300 text-sm">
                    フォームからお送りください
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="text-accent-400 text-2xl mb-3">⏰</div>
                  <h3 className="text-white font-semibold mb-2">回答時間</h3>
                  <p className="text-gray-300 text-sm">
                    通常1-3営業日以内
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="text-accent-400 text-2xl mb-3">🌐</div>
                  <h3 className="text-white font-semibold mb-2">SNS</h3>
                  <p className="text-gray-300 text-sm">
                    SNSでも発信中
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}