import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import styles from "./MealPlannerPage.module.css";

const days = [
  { name: "Mon", num: 28, meals: { lunch: "Quinoa Salad", dinner: "Tuscan Chicken" } },
  { name: "Tue", num: 29, meals: { breakfast: "Berry Oatmeal" } },
  { name: "Wed", num: 30, meals: {} },
  { name: "Thu", num: 31, meals: {} },
  { name: "Fri", num: 1, meals: {} },
  { name: "Sat", num: 2, meals: {} },
  { name: "Sun", num: 3, meals: {} },
];

const slots = ["breakfast", "lunch", "dinner"];

function Slot({ label, value }) {
  return (
    <div>
      <div className={styles.slotLabel}>{label}</div>
      {value ? (
        <div className={styles.filled}>
          <img
            alt={value}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtatl7QNSFSZaSullIPFTM-7L2IcOIBa5OXh-3M28VAswsaf76_VzXwvDhnf8ocmxcQDrbureSQBUPrZoqVdzpmT2N9dwVNAW38nWwe4zYY4-otu0LiUwk2EoW8nigRuNWCFvZz-r9quDgKhQLk5UMAvgz-w-ries-mQKB5myA5mj4upAoAeBRC7SjWTZ06WvEsYFjFDN1_1IFwKXVAPbTJ-wCdsggnYDkY0o5EBovfHzCwkONQbgJhg"
          />
          <span>{value}</span>
        </div>
      ) : (
        <div className={styles.empty}>
          <Plus size={16} />
          Add recipe
        </div>
      )}
    </div>
  );
}

export default function MealPlannerPage() {
  return (
    <main className="page">
      <div className="wrap">
        <div className={styles.head}>
          <div>
            <h1>This Week's Plan</h1>
            <p>Oct 28 - Nov 3</p>
          </div>
          <div className={styles.tools}>
            <button type="button">
              <ChevronLeft size={16} /> Prev
            </button>
            <button type="button">
              Next <ChevronRight size={16} />
            </button>
            <button type="button" className={styles.danger}>
              Clear week
            </button>
          </div>
        </div>
        <div className={styles.week}>
          {days.map((day) => (
            <article key={day.name} className={styles.day}>
              <div className={styles.dayName}>{day.name}</div>
              <div className={styles.dayNum}>{day.num}</div>
              {slots.map((slot) => (
                <Slot key={slot} label={slot} value={day.meals[slot]} />
              ))}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
