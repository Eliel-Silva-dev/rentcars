import style from './page.module.css';

export default function Home() {
  return (
    <main id={style.main_home}>
      <h2>Aluguel de carros em Campinas, SP, Brasil</h2>
      <h3>Pesquise, compare e alugue com os melhores preços</h3>
      <form className={style.form_home}>
        <div className={style.retira}>
          <p>Retirar o carro em:</p>
          <input type="text" placeholder="Campinas, Sp, Brasil" />
        </div>
        <div>
          <input type="checkbox" /> <label>Devolver em outra cidade</label>
        </div>
        <div className={style.date}>
          <div>
            <p>Data e Hora de retirada</p>
            <input
              type="date"
              name="dataretira"
              id="dataretira"
              placeholder="01/01/2024"
            />
            <select>
              <option value="00:00">00:00</option>
              <option value="00:30">00:30</option>
              <option value="01:00">01:00</option>
              <option value="01:30">01:30</option>
              <option value="02:00">02:00</option>
              <option value="02:30">02:30</option>
              <option value="03:00">03:00</option>
              <option value="03:30">03:30</option>
              <option value="04:00">04:00</option>
            </select>
          </div>
          <div>
            <p>Data e Hora de devolução</p>
            <input type="date" name="dataretira" id="dataretira" />
            <select>
              <option value="00:00">00:00</option>
              <option value="00:30">00:30</option>
              <option value="01:00">01:00</option>
              <option value="01:30">01:30</option>
              <option value="02:00">02:00</option>
              <option value="02:30">02:30</option>
              <option value="03:00">03:00</option>
              <option value="03:30">03:30</option>
              <option value="04:00">04:00</option>
            </select>
          </div>
        </div>
        <div >
          <p>Residencia:</p>
          <div className={style.residence}>
            <select>
              <option value="brasil">Brasil</option>
              <option value="estadosUnidos">Estados Unidos</option>
              <option value="portugal">Portugal</option>
            </select>
            <button type="submit">Pesquisar</button>
          </div>
        </div>
      </form>
    </main>
  );
}
