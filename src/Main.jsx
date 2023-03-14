import { useState } from "react";

function Main() {
  const [registerListData, setRegisterListData] = useState([]);

  const [registerValue, setRegisterValue] = useState([
    {
      userName: "",
      phoneNumber: "",
      email: "",
      password: "",
      rePassword: "",
    },
  ]);

  const [registerError, setRegisterError] = useState([
    {
      userName: "",
      phoneNumber: "",
      email: "",
      password: "",
      rePassword: "",
    },
  ]);

  const handleRegisterValue = (e, key) => {
    setRegisterValue({
      ...registerValue,
      [key]: e.target.value,
    });
  };

  console.log(registerValue);

  const registerAddList = () => {
    let isValid = true;
    const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const regexPassword =
      /^(?=.*[<>@!#$%^&*()_+{}?:;|'\"\\,./~`=])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

    const error = {};
    if (!registerValue.userName) {
      error.userName = "user name is required";
      isValid = false;
    } else {
      error.userName = "";
    }

    if (!registerValue.phoneNumber) {
      error.phoneNumber = "phone number is required";
      isValid = false;
    } else if (!regexPhoneNumber.test(registerValue.phoneNumber)) {
      error.phoneNumber = "invalid phone number format";
      isValid = false;
    } else {
      error.phoneNumber = "";
    }

    if (!registerValue.email) {
      error.email = "user name is required";
      isValid = false;
    } else if (!regExEmail.test(registerValue.email)) {
      error.email = "invalid email format";
      isValid = false;
    } else {
      error.email = "";
    }

    if (!registerValue.password) {
      error.password = "password is required";
      isValid = false;
    } else if (!regexPassword.test(registerValue.password)) {
      error.password = "invalid password format";
      isValid = false;
    } else {
      error.password = "";
    }

    if (registerValue.rePassword !== registerValue.password) {
      error.rePassword = "Type your password again";
      isValid = false;
    } else {
      error.rePassword = "";
    }

    if (isValid === true) {
      setRegisterListData([
        ...registerListData,
        {
          userName: registerValue.userName,
          phoneNumber: registerValue.phoneNumber,
          email: registerValue.email,
          password: registerValue.password,
          rePassword: registerValue.rePassword,
        },
      ]);

      setRegisterValue({
        userName: "",
        phoneNumber: "",
        email: "",
        password: "",
        rePassword: "",
      });
    }
    setRegisterError(error);
  };

  const renderRegister = () => {
    return registerListData.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.userName}</td>
          <td>{item.phoneNumber}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.rePassword}</td>
        </tr>
      );
    });
  };

  return (
    <div class="body-wrapper-login">
      <div class="login-wrap">
        <form class="login-form">
          <div class="header-form">Đăng ký</div>

          <p class="field-form">User Name</p>
          <input
            id="userName"
            class="field-form-input"
            type="text"
            name="User Name"
            placeholder="Nhập tên tài khoản của bạn"
            onChange={(e) => handleRegisterValue(e, "userName")}
            value={registerValue.userName}
          />
          <span>{registerError.userName}</span>

          <p class="field-form">Phone number:</p>
          <input
            id="phone-number"
            class="field-form-input"
            type="number"
            name="phone-number"
            placeholder="Nhập vào số điện thoại của bạn"
            onChange={(e) => handleRegisterValue(e, "phoneNumber")}
            value={registerValue.phoneNumber}
          />
          <span>{registerError.phoneNumber}</span>

          <p class="field-form">Email:</p>
          <input
            id="email"
            class="field-form-input"
            type="email"
            name="email"
            placeholder="Nhập vào email của bạn"
            onChange={(e) => handleRegisterValue(e, "email")}
            value={registerValue.email}
          />
          <span>{registerError.email}</span>

          <p class="field-form">Password</p>
          <input
            id="password"
            class="field-form-input"
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
            onChange={(e) => handleRegisterValue(e, "password")}
            value={registerValue.password}
          />
          <span>{registerError.password}</span>

          <p class="field-form">Nhập lại Password</p>
          <input
            id="confirmPassword"
            class="field-form-input"
            type="password"
            name="password"
            placeholder="Nhập lại mật khẩu"
            onChange={(e) => handleRegisterValue(e, "rePassword")}
            value={registerValue.rePassword}
          />
          <span>{registerError.rePassword}</span>

          <div class="input-check">
            <input id="agree" type="checkbox" />
            Đồng ý với điều khoản dịch vụ.
          </div>

          <p class="login-term">
            Nếu bạn đã có tài khoản?
            <a href="#">Đăng Nhập</a>
          </p>
          <button
            id="btn-login"
            class="btn-login"
            type="button"
            onClick={() => registerAddList()}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="list-register">
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Password</th>
              <th>Re-Password</th>
            </tr>
          </thead>

          <tbody>{renderRegister()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
