
import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './router/mainRoute'
import { Provider } from 'react-redux'
import { Store } from './global/store'

const App = () => {
  return (

    <div>
     <Provider store={Store} >
     <RouterProvider router={mainRoute}/>
     </Provider>
    </div>

  )
}

export default App