import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex pt-2">
      <div className="form-control pr-2">
        <label htmlFor="" className={`label cursor-pointer gap-2`}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className={`label cursor-pointer gap-2`}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
