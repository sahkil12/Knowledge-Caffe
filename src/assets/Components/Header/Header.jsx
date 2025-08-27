import Profile from '../../images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between  mx-auto mt-7 shadow-md px-4 md:px-7 py-4 md:py-7  mb-7'>
      <h1 className="text-3xl font-bold md:text-[40px] md:font-bold">Knowledge cafe</h1>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;
