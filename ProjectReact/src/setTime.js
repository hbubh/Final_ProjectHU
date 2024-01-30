const performActionIfHourPassed = () => {
  let doIt = false;
  const currentTime = new Date().getTime();

  // הבדיקה האם יש זמן אחרון שבו בוצעה פעולה
  const lastActionTime =
    parseInt(localStorage.getItem("lastActionTime"), 10) || 0;

  // בדיקה האם עברה שעה מאז הפעולה האחרונה
  const oneHourInMillis = 1 * 60 * 1000; // מילימי-שניות בשעה
  if (currentTime - lastActionTime >= oneHourInMillis) {
    // ביצוע הפעולה
    console.log("ביצוע פעולה...");
    doIt = true;
    // שמירת הזמן הנוכחי כזמן אחרון שבו בוצעה פעולה
    localStorage.setItem("lastActionTime", currentTime.toString());
  } else {
    doIt = false;
  }
  return doIt;
};

export default performActionIfHourPassed;

/* // קריאה לפונקציה באופן תדיר, לדוג', כל 5 דקות
setInterval(performActionIfHourPassed, 5 * 60 * 1000); // מילימי-שניות ב-5 דקות */
