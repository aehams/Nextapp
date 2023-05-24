import React, {useState} from 'react';
import Context from './Context';


const Provider = ({children}) => {
  //  const image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fcomputer-user-icon&psig=AOvVaw3LiH1fVYlWd3-V82S8Voop&ust=1684511226023000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLC7uLyb__4CFQAAAAAdAAAAABAJ'
  //   const imageBackground='https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fcomputer-user-icon&psig=AOvVaw3LiH1fVYlWd3-V82S8Voop&ust=1684511226023000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLC7uLyb__4CFQAAAAAdAAAAABAJ'


  // const [User, setUser,list] = useState({
  //  name:'',
  //  Password:'',
  //  login:false,
  //  mail:'',
  // //  image:image,
  // //  imageBackground:imageBackground,
  //  list:[]
  // });

  return (
    <Context.Provider
      value='Test value'>
      {children}
    </Context.Provider>
  );
};

export default Provider;
