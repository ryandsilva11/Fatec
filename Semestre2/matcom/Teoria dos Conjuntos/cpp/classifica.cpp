#include<stdio.h>
#include<conio.h>
main()
{
	int c,chave,temp,i,j,a[6],x[6];
	a[1]=2;a[2]=0;a[3]=-7;a[4]=0;a[5]=1;
	for(i=1;i<=5;i++)
		printf("\n %d",a[i]);
	printf("\n");
	
	c=1;
	chave=0;
	x[1]=a[1];
	for(i=2;i<=5;i++)
	{
		for(j=1;j<=c;j++)
			if(a[i]==x[j])
				chave=1;
		if(chave==0)
			{
				c=c+1;
				x[c]=a[i];
			}
		chave=0;
	}
	
	for(i=1;i<=c-1;i++)
		for(j=i+1;j<=c;j++)
			if(x[i]>x[j])
				{
					temp=x[i];
					x[i]=x[j];
					x[j]=temp;	
				}
				
	for(i=1;i<=c;i++)
		printf("\n %d",x[i]);
	getch();
}
