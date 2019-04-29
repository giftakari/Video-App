import { combineReducers } from 'redux';

const songsReducer = () =>{
  return[
  {title: 'No Scrubs', durataion:'4:56'},
  {title: 'No Macarna', durataion:'3:56'},
  {title: 'All Stars', durataion:'2:45'},
  {title: 'I want to fly', durataion:'4.56'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) =>{
  if (action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs:songsReducer,
  selectedSong:selectedSongReducer
});
