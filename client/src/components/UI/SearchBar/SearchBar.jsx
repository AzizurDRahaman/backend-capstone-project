import React from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function SearchBar() {
  const skills = ["HTML", "CSS", "JavaScript", "React","HTML", "CSS", "JavaScript", "React"];
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.searchBar}>
          <FaSearch />
          <input type="text" placeholder="Type any job title" />
        </div>
        <div className={styles.filter}>
          <div className={styles.options}>
            <select>
              <option>Skills</option>
            </select>
            <div className={styles.skills} >
              {skills.map((skill, index) => (
                <div className={styles.skill} key={index}>
                  {skill}
                  <span> <IoMdClose size={20} /> </span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.buttons}>
            <button>Apply Filter</button>
            <button className={styles.clear}>Clear</button>
          </div>
        </div>
      </form>
    </div>
  );
}
