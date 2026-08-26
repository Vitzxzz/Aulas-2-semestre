#include <stdio.h>

int main()
{
    int x = 82;
    int* y = &x;
    printf("%d\n", x);
    printf("%d\n", y);
    printf("%d\n", *y);
}