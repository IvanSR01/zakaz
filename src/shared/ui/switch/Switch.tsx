"use client";
import { FC, useState } from "react";
import styles from "./Switch.module.scss";
import { ISwitch } from "./Switch-interface";
import clsx from "clsx";

const Switch: FC<ISwitch> = ({ options, setState }) => {
  const [checked, setChecked] = useState<string>(options[0]);
  const handleChange = (val: string) => {
    setChecked(val);
    setState && setState(val);
  };
  return (
    <div className={styles.wrapper}>
      {options.map((item, i) => (
        <div
          className={clsx(styles.item, item === checked && styles.active)}
					onClick={() => handleChange(item)}
          key={i}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
export default Switch;
