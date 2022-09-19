import UserCard from 'components/UserCard';
import React from 'react';

type userPageState = {
  loaded: boolean;
  loadingText: string;
  data: any;
};

const UsersPage = () => {
  const [userData, setUserData] = React.useState<userPageState>({
    loaded: false,
    loadingText: 'Loading....',
    data: [],
  });

  React.useEffect(() => {
    if (userData.loaded) {
      return;
    }
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setUserData((prevState) => ({
          ...prevState,
          loaded: true,
          data: data,
        }));
      })
      .catch((e) => {
        setUserData((prevState) => ({
          ...prevState,
          loadingText: 'An error has occured please reload page',
        }));
      });
  }, []);

  return userData.loaded ? (
    <div className="w-full px-5 max-w-full mb-10 mt-7">
      <div className="flex justify-center mobile:flex-row flex-col flex-wrap content-center">
        {userData.data.map(
          (user: {
            name: string;
            email: string;
            username: string;
            phone: string;
            website: string;
          }) => (
            <UserCard
              name={user.name}
              email={user.email}
              website={user.website}
              contact={user.phone}
              imagePath={getUserImagePath(user.username)}
            />
          )
        )}
      </div>
    </div>
  ) : (
    <div className="top-1/2 left-1/2 fixed">{userData.loadingText}</div>
  );
};

const getUserImagePath = (userName: string) =>
  `https://avatars.dicebear.com/v2/avataaars/%7B%7B${userName}%7D%7D.svg`;

export default UsersPage;
