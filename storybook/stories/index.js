/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { storiesOf } from '@storybook/react-native';

import RoomItem from './RoomItem';
// import Message from './Message';
import UIKit from './UIKit';
// import RoomViewHeader from './RoomViewHeader';

// Change here to see themed storybook
const theme = 'light';

const reducers = combineReducers({
	settings: () => ({}),
	login: () => ({
		user: {
			username: 'diego.mello'
		}
	}),
	meteor: () => ({ connected: true }),
	activeUsers: () => ({ abc: 'online' })
});
const store = createStore(reducers);

storiesOf('RoomItem', module)
	.addDecorator(story => <Provider store={store}>{story()}</Provider>)
	.add('list roomitem', () => <RoomItem theme={theme} />);
// storiesOf('Message', module)
// 	.add('list message', () => <Message theme={theme} />);
storiesOf('UIKit', module)
	.add('list uikit', () => <UIKit />);
// FIXME: I couldn't make these pass on jest :(
// storiesOf('RoomViewHeader', module)
// 	.add('list', () => <RoomViewHeader theme='black' />);
