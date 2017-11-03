## Verbs (All possible options for descriptive actions)
| `GET`          | retrieve something                                            | example                  |
|----------------|---------------------------------------------------------------|--------------------------|
| +get           | Get a single resource object                                  | get card                 |
| +find          | Find a single or list of resources by search criteria         | find thing               |
| -fetch         | fetch a single resource. TBD: Might be duplicate.             |                          |
| +list          | Get a list of all resources in a group                        | list cards               |

| `POST`         | create something new                                          | example                  |
|----------------|---------------------------------------------------------------|--------------------------|
| +create        | Create a new data object or ownable resource data structure   | create card              |
| -register      | register a new user as a resource owner                       | register new user to     |

| `PUT`          | change something                                              | example                  |
|----------------|---------------------------------------------------------------|--------------------------|
| -modify        | modify target by replacing with a supploed modified version   |                          |
| -change        | change a single specified property of a larger target         |                          |
| +update        | replace item with new item                                    | replace card with card   |
| +assign        | assign owner of resource                                      | assign user to team      |

| `DELETE`       | remove something                                              | example                  |
|----------------|---------------------------------------------------------------|--------------------------|
| +remove        | Remove something from a larger set that exists independantly  | remove card              |
| -delete        | Ussage TBD: might be duplicate                                | delete card              |
| -unregister    | unregister a user and remove any of owner's data              |                          |

## Nouns (All possible descriptive objects)
| Noun           | Description                                                   | example                  |
|----------------|---------------------------------------------------------------|--------------------------|
| +card          | user-owned data object that can be assigned to other groups   | create card              |
| -container     | contains groups of cards and can be owned DIVERGENT           |                          |
| +board         | a group of smaller objects owned by team of minimum one user  | create board             |
| +user          | a user who owns resources and can be a member of a team       | create user              |
| +member        | a user that is part of a team list                            | remove member from team  |
| +list          | contains groups of cards and can be owned DIVERGENT           | add card to list         |
| +owner         | original owner of a resource                                  | create board with owner  |

> All nouns can be both singular or plural

### method # /noun/verbAction
