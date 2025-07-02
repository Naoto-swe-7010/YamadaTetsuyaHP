import SectionTitle from '@/components/common/SectionTitle';

export default function KeyMessage() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Key Message"
          subtitle="挑戦への想い"
        />
        
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 animate-slide-in-left leading-relaxed">
                  夢を持ち、実現に向け
                </h3>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-accent-400 animate-slide-in-left leading-relaxed" style={{ animationDelay: '0.1s' }}>
                  一歩踏み出す勇気
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                高校時代はテニス部に所属しておりましたが、3年間一度も団体戦に出場することはありませんでした。練習に身が入らず、コートの隅で時間が過ぎるのをただ待っておりました。競技への熱意を失ったまま、高校生活を終えました。
                <br />
                大学入学後にラクロスと出会い、競技を始めました。練習を重ねるうちにのめり込み、多くの時間を費やしました。その結果、21歳以下の日本代表に選出され、国際大会に出場いたしました。
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 animate-slide-in-left leading-relaxed" style={{ animationDelay: '0.3s' }}>
                  人はいつからでも
                </h3>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-accent-400 animate-slide-in-left leading-relaxed" style={{ animationDelay: '0.4s' }}>
                  何にでもなれる
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
                現在は、本場・北米のボックスラクロスプロリーグで、アジア人初の選手としてプレーすることを目指して活動しております。
                <br />
                挑戦を続ける中で、夢中になることの面白さや、踏み出す勇気の大切さを伝えていきたいと思っております。目標達成に向けて挑戦する姿、成長や思考、環境が変化する過程を発信することで1人でも多くの人に自分の想いを伝えることができれば幸いです。
                <br />
                誰かの人生が豊かになるキッカケになることができれば嬉しく思います。
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <blockquote className="text-xl lg:text-2xl font-medium text-accent-400 italic animate-fade-in" style={{ animationDelay: '0.6s' }}>
              『夢中を大切に』
            </blockquote>
            <cite className="block mt-4 text-gray-400 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              - by Tetsuya.Y
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}