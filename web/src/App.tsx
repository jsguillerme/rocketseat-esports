import logoImg from './assets/logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { CreateAdModel } from './components/CreateAdModel';
import axios from 'axios';

interface Game {
  id: string;
  title: string;
  bannerURL: string;
  _count: {
    ads: number
  }
}

export function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3333/games')
      .then(response => setGames(response.data))

  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo NLW eSports" />
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => <GameBanner
          bannerURL={game.bannerURL}
          title={game.title}
          adsCount={game._count.ads}
          key={game.id}
        />)}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModel />
      </Dialog.Root>
    </div>
  );
}
