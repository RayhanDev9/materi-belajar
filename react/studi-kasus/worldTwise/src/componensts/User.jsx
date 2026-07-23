import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./User.module.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function User() {
  const user = FAKE_USER;
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <Button type="primary " onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/

/*
TANTANGAN

1) Tambahkan `AuthProvider` ke `App.jsx`
2) Di halaman `Login.jsx`, panggil `login()` dari konteks
3) Di dalam sebuah effect, periksa apakah `isAuthenticated === true`. Jika ya, navigasikan secara programatik ke `/app`
4) Di `User.js`, baca dan tampilkan pengguna yang masuk dari konteks (objek `user`). Kemudian sertakan komponen ini di `AppLayout.js`
5) Tangani tombol logout dengan memanggil `logout()` dan navigasikan kembali ke `/`
*/
