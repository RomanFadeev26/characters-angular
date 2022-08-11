import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Character} from './entities/character.entity';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characters = [{
      "id": 1,
      "level": 1,
      "name": "Wizard of Coast",
      "classes": [
        {
          "type": "wizard",
          "level": 1
        }
      ],
      "race": "Half-Elf",
      "photo": "https://i.pinimg.com/736x/92/1b/b2/921bb2b9cfaee0fb768cfb08be6f38be.jpg",
      "perks": {
        "proficiency": [
          "stealth",
          "athletics"
        ],
        "saving-throws": [
          ""
        ]
      },
      "death-saves": {
        "death": 0,
        "life": 0
      },
      "speed": 30,
      "proficiency-bonus": 2,
      "base-characteristics": {
        "strength": 10,
        "dexterity": 8,
        "constitution": 12,
        "intelligence": 15,
        "wisdom": 14,
        "charisma": 13
      },
      "hitpoints": {
        "current": 5,
        "maximum": 10,
        "temporarly": 0,
        "dices": 1
      },
      "experience": 100,
      "alignment": "LG",
      "armor": 8,
      "weapons": [
        {
          "name": "Кинжал",
          "attack-bonus": 3,
          "damage": "1d6 + 3"
        }
      ],
      "languages": [
        "Общий"
      ],
      "other-proficiencies": [
        ""
      ],
      "equipment": {
        "money": {
          "gold": 10,
          "copper": 30,
          "silver": 10,
          "electrum": 0,
          "platinum": 0
        },
        "other": [
          {
            "name": "Набор путешественника",
            "quantity": 1
          },
          {
            "name": "Стрелы",
            "quantity": 10
          }
        ]
      },
      "personality-traits": "",
      "ideals": "",
      "bonds": "",
      "flaws": "",
      "features": [
        ""
      ]
    }, {
      "id": 2,
      "level": 1,
      "name": "Warrior of Coast",
      "classes": [
        {
          "type": "fighter",
          "level": 1
        }
      ],
      "race": "Half-Orc",
      "photo": "https://i.pinimg.com/736x/92/1b/b2/921bb2b9cfaee0fb768cfb08be6f38be.jpg",
      "perks": {
        "proficiency": [
          "stealth",
          "athletics"
        ],
        "saving-throws": [
          ""
        ]
      },
      "death-saves": {
        "death": 0,
        "life": 0
      },
      "speed": 30,
      "proficiency-bonus": 2,
      "base-characteristics": {
        "strength": 15,
        "dexterity": 14,
        "constitution": 13,
        "intelligence": 8,
        "wisdom": 12,
        "charisma": 10
      },
      "hitpoints": {
        "current": 5,
        "maximum": 10,
        "temporarly": 0,
        "dices": 1
      },
      "experience": 100,
      "alignment": "LE",
      "armor": 14,
      "weapons": [
        {
          "name": "Кинжал",
          "attack-bonus": 3,
          "damage": "1d6 + 3"
        }
      ],
      "languages": [
        "Общий"
      ],
      "other-proficiencies": [
        ""
      ],
      "equipment": {
        "money": {
          "gold": 10,
          "copper": 30,
          "silver": 10,
          "electrum": 0,
          "platinum": 0
        },
        "other": [
          {
            "name": "Набор путешественника",
            "quantity": 1
          },
          {
            "name": "Стрелы",
            "quantity": 10
          }
        ]
      },
      "features": [
        ""
      ]
    }];
    return {characters};
  }

  genId(characters: Character[]): number {
    return characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 1;
  }
}
