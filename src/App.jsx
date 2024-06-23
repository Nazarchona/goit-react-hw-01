import Profile from './components/profile/profile';
import FriendList from './components/friendlist/friendList';
import TransactionHistory from './components/transactionhistory/transactionhistory';

import userData from './userdata.json';
import friends from './friends.json';
import transactions from './transactions.json';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

