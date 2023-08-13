const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <div className='animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-solid'></div>
        </div>
    );
}

export default LoadingSpinner;
