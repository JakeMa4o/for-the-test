import { FC } from "react";
import s from "./Hero.module.scss";
import HeroCard from "./HeroCard";

type HeroCardDataDetails = {
  rating: number;
  feature: string;
}

type HeroCardData = {
  id: number;
  icon: string;
  title: string;
  description: string;
  details: HeroCardDataDetails
}

const heroCards : HeroCardData[] = [
  {
    id: 0,
    icon: "✨",
    title: "Креативный дизайн",
    description: "Мы создаем уникальные дизайны, которые отаржают индивидуальность вашего бренда и привлекают внимание целевой аудитории.",
    details: {
      rating: 4.9,
      feature: "Дизайн",
    }
  },
  {
    id: 1,
    icon: "🚀",
    title: "Быстрая разработка",
    description: "Оптимизированный процесс разработки позволяет нам создавать высококачественные продукты в сжатые сроки.",
    details: {
      rating: 4.8,
      feature: "Разработка",
    }
  },
  {
    id: 2,
    icon: "📱",
    title: "Мобильная оптимизация",
    description: "Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом экране.",
    details: {
      rating: 4.7,
      feature: "Оптимизация",
    }
  },
]

const Hero: FC = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <h1>Инновационные решения для вашего бизнеса</h1>

        <div className={s.heroCards}>
          {heroCards.map(heroCard => (
            <HeroCard key={heroCard.id} {...heroCard}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero