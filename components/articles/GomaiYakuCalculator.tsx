"use client";

import { useState } from "react";

// Purely client-side arithmetic: no network requests, no storage of input
// values (component state only, cleared on reload). Accepts integers only;
// 0 for 5枚役回数 is a valid input (not an error) with its own message.
export default function GomaiYakuCalculator() {
  const [totalGames, setTotalGames] = useState("");
  const [count, setCount] = useState("");

  const totalGamesNum = totalGames.trim() === "" ? NaN : Number(totalGames);
  const countNum = count.trim() === "" ? NaN : Number(count);

  const isTotalGamesValid = Number.isFinite(totalGamesNum) && Number.isInteger(totalGamesNum) && totalGamesNum >= 1;
  const isCountValid = Number.isFinite(countNum) && Number.isInteger(countNum) && countNum >= 0;

  let result: string | null = null;
  let error: string | null = null;

  if (totalGames.trim() === "" || count.trim() === "") {
    // No input yet -- show nothing, not an error.
  } else if (!isTotalGamesValid) {
    error = "総ゲーム数は1以上の整数で入力してください。";
  } else if (!isCountValid) {
    error = "5枚役回数は0以上の整数で入力してください。";
  } else if (countNum === 0) {
    result = "未出現のため出現率は算出できません";
  } else {
    const denom = totalGamesNum / countNum;
    result = `約1/${denom.toFixed(1)}`;
  }

  return (
    <div className="gomaiyaku-calculator">
      <div className="gomaiyaku-calculator-field">
        <label htmlFor="gomaiyaku-total-games">カウント対象の総ゲーム数</label>
        <input
          id="gomaiyaku-total-games"
          type="number"
          inputMode="numeric"
          min={1}
          step={1}
          value={totalGames}
          onChange={(e) => setTotalGames(e.target.value)}
          placeholder="例：1000"
        />
      </div>
      <div className="gomaiyaku-calculator-field">
        <label htmlFor="gomaiyaku-count">5枚役回数</label>
        <input
          id="gomaiyaku-count"
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
          placeholder="例：40"
        />
      </div>

      {error && <p className="gomaiyaku-calculator-error">{error}</p>}
      {result && <p className="gomaiyaku-calculator-result">5枚役出現率：{result}</p>}
    </div>
  );
}
