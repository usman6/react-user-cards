import EmailSVG from './../../common/images/svgs/email.svg';
import FavouriteSVG from './../../common/images/svgs/favourite.svg';
import DeleteSVG from './../../common/images/svgs/delete.svg';
import EditSVG from './../../common/images/svgs/edit.svg';
import PhoneSVG from './../../common/images/svgs/phone.svg';
import WebsiteSVG from './../../common/images/svgs/website.svg';

const UserCard = ({
  name,
  email,
  contact,
  website,
  imagePath,
}: {
  name: string;
  email: string;
  contact: string;
  website: string;
  imagePath: string;
}) => (
  <div className="mx-4 mt-6 w-full max-w-xl mobile:w-72 border border-solid shadow-md rounded-md border-gray-200 hover:shadow-xl">
    <div className="w-full bg-gray-100">
      <img
        className="mobile:w-52 w-72 mx-auto"
        src={imagePath}
        alt="No Image"
      ></img>
    </div>
    <div className="flex flex-col px-6 mt-4 mb-4">
      <p className="font-sans font-semibold tracking-[.25px] text-xl dark:text-dark-contrastText mb-0">
        {name}
      </p>
      <div className="flex flex-row mt-2 align-middle text-gray-600 flex-wrap">
        <EmailSVG className="" />
        <span className="ml-2 font-sans font-normal text-base">{email}</span>
      </div>
      <div className="flex flex-row mt-2 align-middle text-gray-600 flex-wrap">
        <PhoneSVG className="" />
        <span className="ml-2 font-sans font-normal text-base">{contact}</span>
      </div>
      <div className="flex flex-row mt-2 align-middle text-gray-600 flex-wrap">
        <WebsiteSVG className="" />
        <span className="ml-2 font-sans font-normal text-base">{website}</span>
      </div>
    </div>
    <div className="grid grid-cols-3 divide-x w-full h-12  bg-slate-300 border border-x-0 border-gray-300">
      <div className=" bg-slate-300 hover:bg-slate-400 hover:cursor-pointer">
        <FavouriteSVG className="mx-auto mt-3" />
      </div>
      <div className="bg-slate-300 hover:bg-slate-400 hover:cursor-pointer">
        <EditSVG className="mx-auto mt-3" />
      </div>
      <div className=" bg-slate-300 hover:bg-slate-400 hover:cursor-pointer">
        <DeleteSVG className="mx-auto mt-3" />
      </div>
    </div>
  </div>
);

export default UserCard;
