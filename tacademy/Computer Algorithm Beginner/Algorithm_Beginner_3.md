# 컴퓨터 알고리즘 - 정렬 문제( Sorting problem )
입력(input)으로 n개의 숫자들의 배열이 들어왔을 때  
출력(output)을 조건을 만족하도록 배열을 다시 나열한다 {오름차순(Increasing Order), 내림차순(Decreasing Order)}

## 선택정렬(Selection sort) 알고리즘
* 알고리즘 설명(Algorithm description)  
선택정렬은 무엇인가? : **선택**하여 정렬하는 알고리즘  
무엇을 선택할 것인가? : 최소값 선택 정렬(Min-Selction sort), 최대값 선택 정렬(Max-Selection sort)  
최소값 선택 정렬
  1. 정렬되지 않은 숫자 중에 가장 작은 숫자를 선택한다.
  2. 선택한 숫자를 정렬되지 않은 숫자들 중 첫 번째 숫자와 자리를 바꾸면 선택된 숫자는 정렬된 것이다.
  3. 모든 숫자를 옮길 때까지 1-2번 과정을 반복한다.  
  ![img](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)
  
* 정확성 증명(Correctness proof)
정확성 증명 : 수학적 귀납법을 이용,  i번째 선택한 숫자가 i번째로 작은(혹은 큰) 숫자인지를 증명
* 성능 분석(Performance analysis)
성능 분석 : 최고차 항을 Θ로 표현
  * 최선/최악의 경우 수행시간 : Θ(n제곱)
  * 최선/최악의 경우 공간 : Θ(n)  
 입력받은 숫자들의 배열이 어떤 형태이면,
  * **최악**의 경우가 되는가?
  * **최선**의 경우가 되는가?

## 정리
* 정렬 문제의 정의  
  n개의 숫자를 입력 받은 숫자들을 점점 커지는 순서나 점점 작아지는 순서로 다시 배열하여 출력하는 문제
* 선택 정렬 알고리즘  
  정렬문제를 푸는 컴퓨터 알고리즘 중의 하나로 현재 상황에서 가장 작거나 가장 큰 숫자를 선택하여 재배치하는 아이디어로 정렬문제를 해결하며 시간 복잡도는 θ(n제곱)
  
