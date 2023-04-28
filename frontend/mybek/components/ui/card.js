import Image from 'next/image';

function Card() {
  return (
    <div className='flex justify-center'>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <Image class="w-full" src="/slider.jpeg" alt="Sunset in the mountains" height={200} width={300}/>
      <div class="px-6 py-4">
        <div class="text-card-title mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Card;
