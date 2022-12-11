import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [fieldList, setFieldList] = useState([{ education: "", college: "" }])
    function addMoreFeild(){
        console.log("sd")
        setFieldList([...fieldList, { education: "", college: "" }]);
    }
    function handleOnChange(key,e){

        console.log(key);
        let feildHandler = [...fieldList]
        feildHandler[key][e.target.name] = e.target.value
        setFieldList(feildHandler);
    //    const { name, value } = e.target;
    //     setFieldList([
    //       ...fieldList,
    //       (fieldList[key][name] = value),
    //     ]);
    }
    return (
      <div>
        <button onClick={addMoreFeild}>ADD MORE</button>
        <button onClick={console.log(fieldList)}>sdffds</button>

        <form>
          {fieldList.map((item, key) => (
            <div key={key}>
              <input
                type="text"
                name="education"
                onChange={(e) => handleOnChange(key, e)}
                // value={item.education || ""}
              />
              <input
                type="text"
                name="college"
                // value={item.education}
                onChange={(e) => handleOnChange(key, e)}
              />
            </div>
          ))}
        </form>
      </div>
    );
}

export default Form