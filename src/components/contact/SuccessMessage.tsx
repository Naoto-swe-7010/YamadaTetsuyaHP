import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface SuccessMessageProps {
  onReset: () => void;
}

export default function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <Card variant="glass" className="text-center animate-fade-in">
      <CardContent className="py-12">
        <div className="text-6xl mb-6">✉️</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          メッセージを送信しました
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          お問い合わせいただき、ありがとうございます。<br />
          記載いただいたメールアドレスに返信させていただきます。<br />
          返信まで少々お時間をいただく場合がございますが、<br />
          必ずお返事いたしますので、お待ちください。
        </p>
        <Button onClick={onReset} variant="outline">
          新しいメッセージを送信
        </Button>
      </CardContent>
    </Card>
  );
}