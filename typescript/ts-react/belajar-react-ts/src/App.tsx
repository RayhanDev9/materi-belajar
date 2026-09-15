import React, { use, useState } from "react";
import SayHello from "./sayHello";
import Friends from "./Friends";
import Status from "./Status";
import Heading from "./Heading";
import Oscar from "./Oscar";
import Button from "./Button";
import Input from "./Input";
import Container from "./Container";
import Login from "./Login";
import User from "./User";
import Counter from "./Counter";
import { AuthProvider } from "./AuthContext";
import MutableRef from "./MutableRef";
import Private from "./Private";
import Profile from "./Profile";
import IconButton from "./IconButton";
import { TrashIcon, CheckIcon } from "./Icon";
import List from "./List";
import { listSections } from "./GenericList";
import RandomNumber from "./RandomNumber";
import Toast from "./Tost";
import HtmlWraper from "./HtmlWraper";
import CustomHook from "./CustomHook";
import Polymorphic from "./Polymorphic";

export default function App() {
  const [value, setValue] = useState<string>("");

  const personName = {
    frist: "Bruce",
    last: "Wayne",
  };

  const personFriends = [
    { frist: "Dhani", last: "Sanjadaya" },
    {
      frist: "Andi",
      last: "Syaputra",
    },
  ];

  // Tipe Data 1: Mahasiswa

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.info("Click", e);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.info(e);
    setValue(e.target.value);
  }

  return (
    <AuthProvider>
      <SayHello nama={personName} isMarried={false} />
      <Friends friends={personFriends} />
      <Status status="error" />

      <Container styles={{ color: "red", textAlign: "center" }} />
      <Login />
      <User />
      <Counter />

      {/* Mengoper komponen 'Profile' seperti oper variabel biasa */}
      <Private isLoggedIn={false} component={Profile} />
      {/* Mengoper cetak biru TrashIcon */}
      <IconButton
        label="Hapus Data"
        icon={TrashIcon}
        onClick={() => alert("Data dihapus")}
      />
      <IconButton
        label="Check"
        icon={CheckIcon}
        onClick={() => alert("Data centang")}
      />
      <Button onClick={handleClick} />
      <List
        items={["Hazel", "RAndy", "Zaki"]}
        onClick={(item) => console.info(item)}
      />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.info(item)} />
      <div style={{ padding: 20 }}>
        {listSections.map((section) => (
          <div key={section.id} style={{ marginBottom: 24 }}>
            <h3>{section.title}</h3>
            {section.content}
          </div>
        ))}
      </div>
      <HtmlWraper variant="primary">Click</HtmlWraper>
      <RandomNumber value={10} isPositif />
      <CustomHook
        nama={{ frist: "Rayhan", last: "Ardi" }}
        age={20}
        isMarried={false}
      />
      <Polymorphic as="h1" size="lg" color="primary">
        Judul Utama
      </Polymorphic>

      <Polymorphic as="a" href="https://google.com" size="sm" color="secondary">
        Klik Tautan Ini
      </Polymorphic>

      <Polymorphic size="md">Ini teks default div</Polymorphic>
      <Oscar>
        <Heading>Oscar Goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Toast position="right-bottom" />

      <MutableRef />
    </AuthProvider>
  );
}
