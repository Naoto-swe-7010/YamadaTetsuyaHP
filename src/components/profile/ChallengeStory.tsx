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
                  高校時代はテニス部に所属していたが、3年間一度も団体戦に出場することはなかった。
                </p>
                <p className="mb-3">
                  練習に身が入らず、コートの隅で時間が過ぎるのをただ待っていた。
                </p>
                <p>
                  競技への熱意を失ったまま、高校生活を終える。
                </p>
              </div>
              
              <div>
                <p className="mb-3">
                  大学入学後にラクロスと出会い、競技を始める。練習を重ねるうちにのめり込み、多くの時間を費やす。
                </p>
                <p>
                  その結果、21歳以下の日本代表に選出され、国際大会に出場。現在は、本場・北米のボックスラクロスプロリーグで、
                  <span className="text-accent-400 font-semibold">アジア人初の選手</span>
                  としてプレーすることを目指している。
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
                  挑戦を続ける中で、夢中になることの面白さや、踏み出す勇気の大切さを伝えていきたい。
                </p>
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