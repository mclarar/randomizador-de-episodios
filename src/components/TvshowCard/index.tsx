import styles from "./TvshowCard.module.css";

export interface Serie {
  id: number;
  nome: string;
  temporadas: number[] | number;
  photo: string;
  episodios: number[] | number;
}

interface tvshowCardProps {
  serie: Serie;
  onCllick?: () => void;
}

export function TvShowCard({ serie, onCllick }: tvshowCardProps) {
  return (
    <div className={styles.cardContainer} onClick={onCllick}>
      <img className={styles.seriePoster} src={`/series/${serie.photo}`} />
    </div>
  );
}
