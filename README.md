# DevOps Mini-Projet 2

Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations

- N° de groupe : 60
- Membres du groupe : Hubert Lopaciuk, Igor Sterniczuk

## Énoncé

### Pré-requis :

- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests

### Ajouter ce fichier MD à votre mini-projet-1

Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue

L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées done
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée done
    - Le code doit être "formatté" correctement (Prettier) done
    - Le code doit être "linté" correctement (Lint) done
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest) done
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée done
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée done

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request

Ouvrez une Pull Request / Merge Request
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.

Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.

```bash
<Ce fichier YAML configure un workflow CI/CD avec GitHub Actions. Il s'active à chaque push ou pull request sur la branche principale. Le workflow utilise Ubuntu comme environnement d'exécution et suit les étapes suivantes :
-Enregistre l'heure de début du pipeline.
-Récupère le code source depuis le référentiel.
-Configure Node.js.
-nstalle les dépendances avec npm.
-Vérifie le formatage avec Prettier.
-Effectue une analyse statique du code avec ESLint.
-Construit le code avec webpack.
-Exécute les tests.
-Affiche un message de succès si toutes les étapes précédentes réussissent.
-Enregistre l'heure de fin du pipeline.>
```

- En particulier : à quoi sert le “on” ? dans votre fichier YML ? Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ?

```bash
<La section "on" dans le fichier YML spécifie les déclencheurs du workflow :
-"on push": Déclenche le workflow à chaque push direct sur la branche principale.
-"on pull_request": Déclenche le workflow à chaque ouverture ou modification de pull request.
Conseil pour les développeurs juniors : "on pull_request" est généralement recommandé car il permet de tester les modifications avant de les fusionner dans la branche principale, assurant ainsi une meilleure qualité du code.>
```

- Quelle est la différence entre run et run_on ? Expliquez par rapport à votre pipeline.

```bash
<La directive "runs-on" est utilisée pour spécifier le système d'exploitation sur lequel le travail doit s'exécuter. Par exemple, dans notre fichier YML, vous avez la directive "runs-on: ubuntu-latest", ce qui signifie que le travail s'exécutera sur la dernière version d'Ubuntu.

La directive "run" par contre est utilisée pour spécifier les commandes qui seront exécutées à l'intérieur d'un travail. Dans notre fichier YML, chaque étape du travail (indiquee par des steps) contient une instruction "run" qui définit la commande à exécuter. Par exemple, l'étape "Install dependencies" utilise la commande "npm install" pour installer les dépendances du projet.>
```

- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline.

```bash
<uses: Cette directive est utilisée pour spécifier une action déjà définie dans le GitHub Marketplace. Elle permet d'inclure et d'exécuter des actions tierces sans avoir à définir les étapes détaillées. Dans votre pipeline, l'utilisation de uses peut être observée dans l'étape "Checkout repository", où l'action "actions/checkout@v2" est utilisée pour effectuer une opération de checkout du code source.

run: La directive run est utilisée pour spécifier les commandes spécifiques qui seront exécutées dans le contexte de votre workflow. Contrairement à uses, run nécessite que vous fournissiez directement les commandes à exécuter. Dans votre pipeline, chaque étape contient une ou plusieurs instructions run pour exécuter des commandes spécifiques. Par exemple, l'étape "Install dependencies" utilise run: npm install pour installer les dépendances du projet.

En résumé, uses est utilisé pour incorporer des actions pré-définies, tandis que run est utilisé pour définir des commandes spécifiques à exécuter dans votre workflow.>
```

- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline.

```bash
<Dans une pipeline, chaque étape est exécutée séquentiellement, ce qui signifie que l'étape suivante dépend souvent du succès de l'étape précédente. Par exemple, dans votre pipeline actuel, l'étape "Build" dépend du succès des étapes "Check Prettier" et "Check Lint". Si l'une de ces étapes échoue, la pipeline s'arrête.

Si vous interchangez l'ordre des étapes, par exemple, en plaçant "Build" avant les étapes de vérification, le pipeline tentera toujours de construire même si les vérifications échouent potentiellement, ce qui peut conduire à des résultats imprévisibles.

En résumé, l'ordre des étapes dans le fichier YML reflète la séquence logique dans laquelle les actions doivent être effectuées, et changer cet ordre peut compromettre l'intégrité du processus de construction et de test.>
```

- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ? Quelles questions devriez-vous vous poser ?

```bash
<Il faut d'abord insaller le programme, ensuite ajouter le step avec le test de securite c'est a dire -name: test de securite run: secure_app , gerer aussi les dependances de secure_app.
Les questions a se poser sont les suivantes: est-ce que secure_app est compatible avec l'environement d'execution, regarder si il faut installer des dependances de secure_app, interpreter les resultat renvoye par l'app pour decider si la pipeline a reussi ou pas, l'impact de l'app sur le temps d'execution de la pipeline.>
```
- Test Merge