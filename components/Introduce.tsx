import Image from "next/image";
import Me from '/public/images/me.jpg';

// 소개 컴포넌트
const Introduce = () => {
  return (
    <div>
      <div className={'flex gap-5 text-3xl font-extrabold mb-5'}>
        <span>👋🏻</span>
        <span>Eung-bug</span>
      </div>
      <div className={'flex justify-center items-center flex-col sm:flex-row gap-10'}>
        <Image
          src={Me}
          alt="이은비"
          width={300}
          height={300}
          className="rounded-[20px]"
        />
        <div className="max-w-[300px]">
          <h4 className={'text-lg font-medium mb-3'}>프론트엔드 개발자 이은비 입니다.</h4>
          <p>🤔 사용자 관점에서 끊임없이 고민합니다.</p>
          <p>🧐 서비스와 함께 성장하는 개발자가 되기 위해 노력합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;