'use client';
import { Campaign } from '@/types/campaign';
import Image from 'next/image';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { checkIfDonationAchieved, getDonationProgress } from '@/lib/campaign';
import { formatToIDR } from '@/lib/utils';

type CardProps = {
  data: Campaign;
};

const Card = ({ data }: CardProps) => {
  // console.log('data', data);

  const {
    image,
    title,
    donation_received: donationReceived,
    donation_target: donationTarget,
    days_remaining: daysRemaining,
    donation_percentage: donationPercentage,
  } = data;

  const progress = getDonationProgress(donationPercentage);
  const achieved = checkIfDonationAchieved(donationTarget, donationReceived);
  const rupiah = formatToIDR(donationReceived);
  return (
    <div className="flex flex-col">
      <div className="w-full h-[200px] relative sm:h-[250px] overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
      </div>
      <div className="flex flex-col gap-2 justify-between h-auto sm:h-[140px]">
        <h2 className="text-xl font-bold antialiased capitalize">{title}</h2>
        <div className="flex flex-col gap-2">
          <Progress value={progress} achieved={achieved} />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h6 className="font-bold">Terkumpul</h6>
              <p>{rupiah}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Sisa Hari</p>
              <p className="text-right"> {daysRemaining}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
