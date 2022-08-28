import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import { userReducer } from './redux/reducers/userReducer';
import {authRoutes,publicRoutes} from './routes/routes'
import {useDispatch} from 'react-redux'
import { rehost } from './servFunctions/userRequests';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const isAuth=useSelector(state=>state.user.isAuth)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(rehost())
  },[])
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <div className='header'>
            <Header/>
          </div>
          <div className='main'>
                  {isAuth?
                    <>
                      {authRoutes.map((p)=>
                        <Route path={p.path} component={p.Component} exact/>
                      )}
                    </>
                    :
                    <>
                      {publicRoutes.map((p)=>
                        <Route path={p.path} component={p.Component} exact/>
                      )}
                    </>
                  }
          </div>
          <div className='footer'>
            <Footer/>
          </div>
        </div>
        <ToastContainer/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
