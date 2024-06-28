import { Routes, Route } from 'react-router-dom'
import app from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/content/Profile/Profile';
import News from './components/content/News/News';
import Music from './components/content/Music/Music';
import Community from './components/content/Community/Community';
import Dialogs from './components/content/Dialogs/Dialogs';
import Dialog from './components/content/Dialogs/Dialog/Dialog'

function App(props) {
  return (
    <div className={app.app}>
        <Header />
        <main className={app.main}>
          <Navbar userId={props.state.nav_bar.user_id}/>
          <div className='content'>
            <Routes>
              {/* Мой профиль */}
              <Route path="/" element={<Profile profile={props.state.my_profile} addPost={props.addPost}/>} />
              <Route path={`profile/${props.state.my_profile.id}`} element={<Profile profile={props.state.my_profile} addPost={props.addPost}/>} /> 
              {/* Чужой профиль */}
              <Route path={`profile/${props.state.foreign_profile.id}`} element={<Profile profile={props.state.foreign_profile} />} /> 
              {/* Мои диалоги */}
              <Route path={`dialogs/${props.state.my_profile.id}`} element={<Dialogs myDialogs={props.state.my_dialogs}/>} />
              {/* Диалог */}
              <Route path={`dialogs/${props.state.my_profile.id}/dialog/${props.state.my_dialogs.dialogs[0].id}`} element={<Dialog myDialogs={props.state.my_dialogs}/>} />
              {/* Мои новости */}
              <Route path="news" element={<News />} />
              {/* Моя музыка */}
              <Route path="music" element={<Music />} />
              {/* Мои сообщества */}
              <Route path="community" element={<Community />} /> 
            </Routes>
          </div>
        </main>
    </div>
  );
}

export default App;