import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function ChallengeStory() {
  return (
    <Card variant="glass">
      <CardHeader>
        <h2 className="text-2xl font-bold text-white text-center">挑戦するきっかけ</h2>
      </CardHeader>
      <CardContent>
        <div className="prose prose-invert max-w-none">
          <div className="bg-white/5 border-l-4 border-accent-400 pl-6 py-4 rounded-r-lg">
            <div className="space-y-6 text-gray-300 leading-relaxed pr-4 text-center">
              <div>
                <p className="mb-3">
                  高校時代に所属していたテニス部では一度も団体戦に出たことがありません。
                </p>
                <p className="mb-3">
                  練習中は時間が過ぎるのをただ待っていました。
                </p>
                <p>
                  マイナスな発言ばかりで周りにも迷惑を掛けていました。
                </p>
              </div>
              
              <div>
                <p>
                  そんな過去がある弱い自分でも、大学から始めたスポーツで
                  <span className="text-accent-400 font-semibold">オリンピックメダリスト</span>
                  になることを目指しています。
                </p>
              </div>
              
              <div className="my-8">
                <div className="text-center space-y-3">
                  <p className="text-accent-400 font-bold text-lg">
                    『夢中を大切に』
                  </p>
                  <p className="text-accent-400 font-bold text-lg">
                    『夢を持ち、実現に向け一歩踏み出す勇気』
                  </p>
                  <p className="text-accent-400 font-bold text-lg">
                    『人はいつからでも何にでもなれる』
                  </p>
                </div>
              </div>
              
              <div>
                <p className="mb-3">
                  目標達成に向けて挑戦する姿、成長や思考、環境が変化する過程を発信することで
                  1人でも多くの人に自分の想いを伝えられたら嬉しいです。
                </p>
                <p>
                  誰かの人生が豊かになるキッカケになれることを願います。
                </p>
              </div>
              
              <div className="text-center mt-8">
                <cite className="font-medium italic">
                  - by Tetsuya.Y
                </cite>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}