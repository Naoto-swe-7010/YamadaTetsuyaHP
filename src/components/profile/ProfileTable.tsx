import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function ProfileTable() {
  const profileData = [
    { label: '名前', value: '山田　哲也' },
    { label: '生年月日', value: '2000年11月20日' },
    { label: '血液型', value: 'B型' },
    { 
      label: '現所属', 
      value: (
        <div>
          <div className="mb-1">
            <span className="font-semibold text-accent-400">カナダ</span><br />
            Owen Sound North Stars
          </div>
        </div>
      )
    },
    { label: 'ポジション', value: 'フォワード' },
    { label: '出身地', value: '東京都　江戸川区' },
    { label: '身長 / 体重', value: '188cm / 100kg' },
    { 
      label: '出身校', 
      value: (
        <div>
          <div className="mb-2">
            <span className="font-semibold text-accent-400">中学</span><br />
            江戸川区立　篠崎第二中学校
          </div>
          <div className="mb-2">
            <span className="font-semibold text-accent-400">高校</span><br />
            法政大学第二高等学校　硬式テニス部
          </div>
          <div>
            <span className="font-semibold text-accent-400">大学</span><br />
            法政大学　経済学部　体育会ラクロス部
          </div>
        </div>
      )
    },
    { 
      label: '戦績', 
      value: (
        <div>
          <div className="mb-2">
            <span className="font-semibold text-accent-400">大学</span><br />
            U21 World Lacrosse championship出場
          </div>
          <div>
            <span className="font-semibold text-accent-400">社会人</span><br />
            男子ラクロス日本代表(練習生)<br />
            男子BOXラクロス日本代表(練習生)
          </div>
        </div>
      )
    },
  ];

  return (
    <Card variant="glass" className="animate-slide-up">
      <CardHeader>
        <h2 className="text-2xl font-bold text-white text-center">Profile</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {profileData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row border-b border-white/10 pb-4 last:border-b-0 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="sm:w-1/3 mb-2 sm:mb-0">
                <span className="text-accent-400 font-semibold text-sm sm:text-base">
                  {item.label}
                </span>
              </div>
              <div className="sm:w-2/3">
                <div className="text-white text-sm sm:text-base leading-relaxed">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}