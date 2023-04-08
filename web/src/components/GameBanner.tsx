interface GameBannerProps {
  bannerURL: string;
  title: string;
  adsCount: number;
}

export function GameBanner({ bannerURL, title, adsCount }: GameBannerProps) {
  return (
    <a href="#" className='relative rounded-lg overflow-hidden hover:brightness-75'>
      <img src={bannerURL} alt="" />

      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0'>
        <strong className='font-bold text-white block'>{title}</strong>
        <span className='text-zinc-300 text-sm block'>{`${adsCount} anúncio(s)`}</span>
      </div>
    </a>
  )
}