# Type e Interface

### Declaração:

interface: É mais adequada para definir estruturas de objetos, classes e contratos em geral. Também é usada para descrever a forma de objetos e a estrutura de classes.
type: É usado para criar tipos personalizados que podem representar qualquer tipo, incluindo primitivos, uniões, interseções e mais.

### Extensibilidade:

interface: É facilmente extensível usando a palavra-chave extends, o que permite criar interfaces que herdam propriedades e métodos de outras interfaces.
type: Não é diretamente extensível. Você pode usar uniões e interseções para criar tipos mais complexos, mas não há uma sintaxe direta de extensão.

### Herança:

interface: Permite herdar de outras interfaces usando a palavra-chave extends.
type: Não permite herança direta de tipos. Você pode alcançar herança usando uniões e interseções.

### Interseção:

interface: Pode ser estendida por meio de interseção (A & B), combinando várias interfaces em uma.
type: Também suporta interseções, permitindo criar tipos complexos combinando outros tipos.

### União:

interface: Não suporta uniões diretamente.
type: Pode representar uniões usando | para combinar diferentes tipos.

### Declarar múltiplas vezes:

interface: Pode ser declarada múltiplas vezes usando a mesma identificação, e as declarações serão mescladas.
type: Não permite declarações múltiplas com a mesma identificação.

### Compatibilidade de atribuição:

interface: As interfaces têm verificação de compatibilidade estrutural mais rigorosa.
type: Ocasionalmente, tipos podem ser mais flexíveis na verificação de compatibilidade.
