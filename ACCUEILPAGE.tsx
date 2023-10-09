import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './ACCUEILPAGE.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 413:6 */
export const ACCUEILPAGE: FC<Props> = memo(function ACCUEILPAGE(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.enTeteBlancTop}></div>
      <div className={classes.striveLogo11}></div>
      <div className={classes.lesStatistiquesResultatsEtActu}>
        Les statistiques, résultats et actualités du Football RSEQ Juvénile D1 et Cadet D2.
      </div>
      <div className={classes.sTRIVESTATSSOON}>STRIVE STATS : SOON</div>
      <div className={classes.rectangle1}></div>
      <div className={classes.sTATISTIQUES}>STATISTIQUES</div>
      <div className={classes.striveSuitLesStatistiquesDesLi}>
        Strive suit les statistiques des ligues Juvénile D1 et Cadet D2 par le biais de leur page Instagram,
        @strive.stats.
      </div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rESULTATS}>RÉSULTATS</div>
      <div className={classes.striveSuitLesResultatsDesLigue}>
        Strive suit les résultats des ligues Juvénile D1 et Cadet D2 en temps réel sur leur site web.
      </div>
      <div className={classes.rectangle5}></div>
      <div className={classes.aCTUALITES}>ACTUALITÉS</div>
      <div className={classes.blessureResultatSerreStrivePub}>
        Blessure, résultat serré, Strive publie tout sur leur site. Des chroniques, des articles et plus encore !
      </div>
      <div className={classes.aCCUEIL}>ACCUEIL</div>
      <div className={classes.rectangle6}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.image1}></div>
      <div className={classes.sTRIVECESTQUOI}>STRIVE : C’EST QUOI ?</div>
      <div className={classes.striveCEstUnOrganismeQuiSuitLe}>
        Strive, c’est un organisme qui suit les résultats du Football RSEQ Juvénile D1 et Cadet D2 par le biais d’une
        page Instagram. Aujourd’hui ce sont plus de 1,000 personnes qui suivent Strive.
      </div>
      <div className={classes.rectangle7}></div>
      <div className={classes.sTRIVESTATSXYZ}>STRIVESTATS.XYZ</div>
      <div className={classes.strivestatsXyzCEstLeSiteWebDeS}>
        strivestats.xyz, c’est le site web de Strive. C’est le site qui répertorie les résultats de chaque match en
        utilisant une interface facile à comprendre. Des chroniques sont disponibles, les statistiques également.
      </div>
      <div className={classes.rectangle72}></div>
      <div className={classes.line1}></div>
      <div className={classes.striveStats2023TousDroitsReser}>Strive Stats, © 2023 - Tous droits réservés.</div>
      <div className={classes.striveLogoWHITE1}></div>
      <div className={classes.image2}></div>
    </div>
  );
});
