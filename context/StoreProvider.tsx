import { Provider } from 'react-redux';
import { ReactNode, FC} from 'react'
import store  from '../store/store';

interface ReduxProviderProps {
    children: ReactNode
}

const ReduxProvider : FC<ReduxProviderProps> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider