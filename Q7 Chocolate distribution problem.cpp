class Solution{
    public:
    long long findMinDiff(vector<long long> a, long long n, long long m){
    //code
    sort(a.begin(),a.end());
    long long min=LLONG_MAX;
    int i=0;
    for(int i=0;i+m-1<n;i++)
    {
        int max=a[i+m-1]-a[i];
        if(max<min)
        min=max;
    }
    return min;
    }   
};
