import { getListCampaign } from '@/server/getListCampaign';
import Image from 'next/image';
import LogoKitabisa from '@/assets/images/logo.jpg';
import { Sorting } from '@/components/campaign/sorting';

import ListCampaign from '@/components/campaign/list-campaign';
import Link from 'next/link';

export default async function Home() {
  const listCampaign = await getListCampaign();

  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-4 sm:px-0  max-w-screen-xl mx-auto">
      <header className="flex justify-between items-center w-full mb-10 my-4 px-4">
        <Link href="/" className="flex gap-4 items-center">
          <Image
            src={LogoKitabisa}
            alt="Logo Kita Bisa"
            width={50}
            height={50}
          />
          <h3 className="text-lg font-bold">Kita Bisa</h3>
        </Link>
        <Sorting />
      </header>
      <ListCampaign dataCampaign={listCampaign} />
    </div>
  );
}
