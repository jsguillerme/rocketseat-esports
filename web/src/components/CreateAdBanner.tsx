import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className='pt-1 mt-8 self-stretch bg-nlw-gradient rounded-lg overflow-hidden'>
      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
        <div>
          <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
          <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
        </div>
        <Dialog.Trigger>
          <button className='py-3 px-4 flex gap-3 items-center bg-violet-500 hover:bg-violet-600 hover:transition-colors text-white rounded-md font-medium'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </Dialog.Trigger>
      </div>
    </div>
  )
}