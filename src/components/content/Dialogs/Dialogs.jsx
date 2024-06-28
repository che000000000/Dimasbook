import React from 'react'
import dialogs from './dilaogs.module.css'
import Item from './components/Item/Item';
import Filters from './components/Filters/Filters';

const Dialogs = (props) => {
    let ItemsElements = props.myDialogs.dialogs.map(
        item => <Item dialogId={item.id} dialogName={item.user_name} dialogAvatar={item.user_avatar} messages={props.myDialogs.messages}/>
    )

    return (
        <div className={dialogs.main_container}>
            <div className={dialogs.dialogs}>
                <div className={dialogs.title}>Диалоги</div>
                {ItemsElements}
            </div>
            <Filters />
        </div>
    )
}

export default Dialogs;