import React from 'react';
const LanguageSelection = (props) => {


    function formatDate(locale) {
        const date = new Date();
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',

            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        })
            .format(date)
            .toString();
    }

    return (
        <label>
            Select a language: <br />
            <select
                onChange={(evt) => {
                    console.log(formatDate(evt.target.value));
                }}
                name="language"
            >
                <option value="none" selected disabled hidden>
                    Select your language
                </option>
                {props.items.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default LanguageSelection;
