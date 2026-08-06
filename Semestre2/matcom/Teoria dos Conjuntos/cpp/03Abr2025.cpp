#include<stdio.h>
#include<conio.h>
main()
{
	int x[6],j,temp,a[6],c,chave,i,valor;

//Inclusão de elementos não repetidos num vetor (iniciando na posição 1)
/*	
	c=1;
	while(c<=5)
	{
		if(c==1)
		{
			printf("\nEntre com o valor: ");
			scanf("%d",&a[c]);
			c=c+1;	
		}
		else
		{
			chave=0;
			printf("\nEntre com o valor: ");
			scanf("%d",&valor);	
			for(i=1;i<=c-1;i++)
				if(a[i]==valor) chave=1;
			if(chave==0)
			{
				a[c]=valor;
				c=c+1;
			}
			else printf("\nValor já existe. Tente um novo valor !!!");
		}
	}
getch();
for(i=1;i<6;i++)
	printf("\n %d ",a[i]);
getch();	

//Classificação crecente do vetor

for(i=1;i<5;i++)
	for(j=i+1;j<=5;j++)
		if(a[i]>a[j])
		{
			temp=a[i];
			a[i]=a[j];
			a[j]=temp;
		}
for(i=1;i<6;i++)
	printf("\n %d ",a[i]);
getch();
*/
// Dado o vetor a, será formado o vetor x sem os elementos repetidos de a

for(i=1;i<6;i++)
{
	printf("\nEntre com o valor no vetor");
	scanf("%d",&a[i]);
}


c=1;
chave=0;
x[1]=a[1];
for(i=2;i<6;i++)
{
		for(j=1;j<=c;j++)
			if(a[i]==x[j]) chave=1;
		if(chave==0)
			{
				c=c+1;
				x[c]=a[i];
			}
		chave=0;	
}
printf("\n Imprimindo o vetor x");
for(i=1;i<=c;i++)
printf("\n %d ",x[i]);
getch();
}

