import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function home() {
  const [globalItem, setGlobalItem] = useState({});
  const [globalAdded, setGlobalAdded] = useState(0);
  const [magicItems, setMagicItems] = useState([
    {
      name: 'Mazochist',
      attributes: 'Legendary, dagger (requires attunment)',
      description:
        'When you attune to this cursed item for the first time, it merges with one of your hands and remains inside of it making you anable to phisicaly part with the dagger. The dagger stays hidden and invisible to any means of detection until you use a bonus action to reveal it. When revealed, the dagger sprouts from the skin under your wrist and remains visible until you use a bonus action again, to hide it. <p>When the dagger is revelaed you can use it to make a melee weapon attack against a creature with disadvantage, using either your strength or dexterity modifier (whitcheve is lower). The weapon deals 1d6 piercing plus 2d6 necrotic damage on a hit, although the target takes only half of that damage and the rest is transmited to yourself. In addition, you can use an action to attack yourself with the dagger. If you choose to do so,choose a creature you can see within 100 feet of you. You take 1d6 necrotic damage and the creature`s health is reduced by double the amount. <p>You can also expend one of the dagger`s five charges (the dagger regains 1d6-1 charges daily at dawn) to stab yourself and take 2d6 necrotic damage and, in response, deal ten times half the damage to an enemy meeting the previous requirements <p>Finaly, you can choose to expend all the swords remaining charges and make it unusable for 13 days (the sword will not reveal itself no matter how hard you try during this time) and sucrifice one of your limbs (must be a whole limb, not the one with the sword). If you choose to do so, your hit point maximum, as well as your current hit points, decrease by 1d6*10 (you die if this reduction brings your hit point maximum to 0) and, in response, a creature meeting the previous requirements instanly dies, except if it uses one legendary action to escape this fate.',
    },
    {
      name: 'Frost Mask',
      attributes: 'Rare, wondrous item (mask)',
      description:
        'While wearing this mask, you have resistance to cold and psychic damage. You have also advantage in saves against being exhausted',
    },
    {
      name: 'Moving Preason',
      attributes: 'Rare, armor (requires attunment)',
      description:
        'When you first attune to this armor you are prisoned inside of it and must live in it. The armor becomes your new flesh and functions like an exoskeleton. The armor has resistance to bludgeoning, piercing and slashing damage and you can attack using your unarmed strikes to make an attack with +5 to hit and deal 1d10+5 bludgeoning, piercing or slashing damage. Depending on the armors design.',
    },
  ]);
  const [added, setAdded] = useState([
    { name: '', attributes: '', description: '' },
  ]);
  // console.log(magicItems[0].description.slice(0, 100));
  return (
    <div>
      <Head>
        <title>Homebrew Magic Item Tables | Treasure Generator</title>
      </Head>
      <main>
        <div className={styles.firstHalf}>
          <div className={styles.displayArea}>
            <h3>{globalItem.name}</h3> <br /> {globalItem.attributes} <br />
            {globalItem.description}
          </div>
          <div className={styles.btnTray}>
            <button
              className={styles.btnSmall}
              onClick={() => {
                setGlobalItem(
                  magicItems[Math.floor(Math.random() * magicItems.length)]
                );
              }}
            >
              Refresh
            </button>
            <button className={styles.btnSmall}>Edit</button>
            <br />
            <button
              className={styles.btnBig}
              onClick={() => {
                setAdded(added, globalItem);
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className={styles.secondHalf}>
          <div className={styles.displayArea}>
            <h3>{added[globalAdded].name}</h3> <br />{' '}
            {added[globalAdded].attributes} <br />
            {added[globalAdded].description}
          </div>
          <div className={styles.btnTray}>
            <button
              className={styles.btnSmall}
              onClick={() => {
                setGlobalAdded(globalAdded - 1);
              }}
            >
              Previous
            </button>
            <button
              className={styles.btnSmall}
              onClick={() => {
                setGlobalAdded(globalAdded + 1);
                console.log(
                  'gadded',
                  globalAdded,
                  'added',
                  added,
                  'added.[gadded].name',
                  added[globalAdded].name,
                  'gitem',
                  globalItem
                );
              }}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// function setParagraphs(str = '') {
//   let paras = [];
//   separate(str);
//   function separate(strToSeparate) {
//     for (let i = 0; i < str.length; i++) {
//       if (
//         strToSeparate[i - 2] + strToSeparate[i - 1] + strToSeparate[i] ==
//         '<p>'
//       ) {
//         let newPara = '';
//         for (let x = 0; x < i; x++) {
//           newPara += strToSeparate[x];
//         }
//         paras.push(newPara);
//         console.log('New Paragraph: ', newPara);
//       }
//       if (i == str.length) {
//       } else {
//         let restOfText;
//         for (let x = i; x < str.length; x++) {
//           restOfText += str[x];
//         }
//         separate(restOfText);
//         console.log('Rest Of Text: ', restOfText);
//       }
//     }
//   }
//   return paras;
// }

function separateParagraphs(str = '') {
  for (let i = 2; i < str.length; i++) {
    if (str[i - 2] + str[i - 1] + str[i] == '<p>') {
      return str.slice(0, i);
    }
  }
}
