import React from "react";
import './autorizationPage.css';

function AutorizationPage() {
    return (
        <div className="autorizationPage">
            <div className="inputsDiv">
                <div className="inputsHeader">Зарегистрироваться</div>
                <form>
                    <div className="loginContainer">
                        <div>Введите логин:</div>
                        <input type="text" size="20" placeholder=" Ваш логин" required></input>
                    </div>
                    <div className="passwordContainer">
                        <div>Введите пароль:</div>
                        <input type="text" size="20" placeholder=" Ваш пароль" required></input>
                    </div>   
                    <div className="submitButton">
                        <input type="submit" value="Отправить"/>
                    </div>
                </form>
            </div>
            <div className="inputsDiv">
                <div className="inputsHeader">Войти</div>
                <form>
                    <div className="loginContainer">
                        <div>Введите логин:</div>
                        <input type="text" size="20" placeholder=" Ваш логин" required></input>
                    </div>
                    <div className="passwordContainer">
                        <div>Введите пароль:</div>
                        <input type="text" size="20" placeholder=" Ваш пароль" required></input>
                    </div>   
                    <div className="submitButton">
                        <input type="submit" value="Отправить"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AutorizationPage;